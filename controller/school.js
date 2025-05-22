const db = require("../db");

// Haversine formula function (in JS)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const toRad = x => (x * Math.PI) / 180;
  const R = 6371; // Radius of Earth in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}



const handleListSchools =  (req, res) => {
  const userLat = parseFloat(req.query.lat);
  const userLon = parseFloat(req.query.lon);

  if (isNaN(userLat) || isNaN(userLon)) {
    return res.status(400).json({ error: 'Invalid latitude or longitude' });
  }

  db.query('SELECT * FROM Schools', (err, schools) => {
    if (err) return res.status(500).json({ error: err });

    // Add distance to each school
    const schoolsWithDistance = schools.map(school => ({
      ...school,
      distance: calculateDistance(userLat, userLon, school.latitude, school.longitude)
    }));

    // Sort by distance
    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.json(schoolsWithDistance);
  });
}

const handleAddSchool =  (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  const sql = 'INSERT INTO Schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'School added', schoolId: result.insertId });
  });
}


module.exports = {
    handleListSchools,
    handleAddSchool
}