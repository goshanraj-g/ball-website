(async () => {
  try {
    const res = await fetch(
      "http://localhost:3001/api/days-out?player=LeBron%20James"
    );
    console.log("status", res.status);
    const text = await res.text();
    console.log(text);
  } catch (e) {
    console.error("error", e);
  }
})();
