function checkweather() {
  const cityRef = document.querySelector("#cityName");
  const cityName = cityRef.value;
  const weatherRes = fetch(
    `https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`,
  );
  const weatherRef = document.querySelector("#weather");

  weatherRes
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const temp = data.current.temp_c;
      const locationName = data.location.name;
      const locationRegion = data.location.region;
      console.log(data);

      weatherRef.innerHTML = `The Temprature of ${locationName} - ${locationRegion} is ${temp}celcius`;
    })
    .catch((error) => {
      weatherRef.innerHTML = "something went Wrong";
      console.log(error);
    });
}

const student = {
  name: "Ali",
  age: "30",
};
const studentJson = JSON.stringify(student);
console.log(studentJson);
console.log(JSON.parse(studentJson));
