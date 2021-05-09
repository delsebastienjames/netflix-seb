// import d'une image
import Netflix from "../assets/img/netflix.jpg";

// import d'un fichier json
import data from "../data.json";
console.log(data);

const Film2 = () => {
  const prenom = [
    { id: "8tyfHr", name: "James" },
    { id: "uFrErs", name: "Dave" },
    { id: "Ezrmop", name: "Mickey" },
    { id: "ulorTrp", name: "Rose" },
    { id: "ptiRmvQ", name: "Steve" },
  ];

  return (
    <ul>
      {prenom.map((user) => {
        return (
          <li key={user.id}>
            <span>Firstname :</span>
            <span className="yellow">{user.name}</span>
            <img
              src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
              alt="reactJS"
            />
            <img src={Netflix} alt="netflix logo" />
            <li className="netflix">{data[0].category}</li>
            <li>{data[1].category}</li>
            <li>{data[2].category}</li>
            <li>{data[3].category}</li>
            <li>{data[4].category}</li>

            <li>{data[1].images[1]}</li>
            <li>{data[2].images[2]}</li>
            <li>{data[3].images[3]}</li>
            <li>{data[4].images[4]}</li>
          </li>
        );
      })}
    </ul>
  );
};

export default Film2;
