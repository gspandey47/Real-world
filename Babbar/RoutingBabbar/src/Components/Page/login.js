app.post("/api/check-username", (req, res) => {
    const { value } = req.body;
    const isUnique = !["user1", "user2"].includes(value); // Example check
    res.json({ isUnique });
  });
  
  app.post("/api/check-password", (req, res) => {
    const { value } = req.body;
    const isUnique = !["password123", "abc123"].includes(value); // Example check
    res.json({ isUnique });
  });
  