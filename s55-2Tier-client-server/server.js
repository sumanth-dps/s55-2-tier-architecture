let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());

app.get("/heros", (req, res) => {
  let herosArr = [
    {
      name: "Prabhas",
      title: "Rebel Star",
      upcomingMovies: [
        "Upcoming Movies : --",
        "Rajasaab",
        "Spirit",
        "Kalki 2898 AD part 2",
        "Salaar Part 2",
        "",
      ],
    },
    {
      name: "Mahesh Babu",
      title: "Super Star",
      upcomingMovies: ["Upcoming Movies : --", "SS Rajamouli-SSMB29"],
    },
    {
      name: "Jr NTR",
      title: "Young Tiger",
      upcomingMovies: [
        "Upcoming Movies : --",
        "Devara Part 1",
        "War 2",
        "Prashanth Neel-NTR31",
      ],
    },
    {
      name: "Ram Charan",
      title: "Mega Power Star",
      upcomingMovies: [
        "Upcoming Movies : --",
        "Game Changer",
        "Buchi Babu-RC16",
        "Sukumar-RC17",
      ],
    },
    {
      name: "Allu Arjun",
      title: "Icon Star",
      upcomingMovies: [
        "Upcoming Movies : --",
        "Pushpa 2",
        "ICON",
        "Koratala Siva-AA21",
      ],
    },
  ];

  res.json(herosArr);
});

app.listen(4567, () => {
  console.log("Listening to port 4567");
});
