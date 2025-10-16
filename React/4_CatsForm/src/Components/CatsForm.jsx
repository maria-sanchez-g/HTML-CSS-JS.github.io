import SingleCat from "./SingleCat";
import { useState } from 'react';

const Initial_Cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris' },
];

function CatsForm () {
const [userCat, setUserCat] = useState('');
const [latinCat, setLatinCat] = useState('');
const [imageCat, setImageCat] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
}

const NewListCats = [...Initial_Cats]

return (
  <>
    <div className="FormCats componentBox">
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name
            <input
              type="text"
              value={userCat}
              name="userCat"
              onChange={(e) => setUserCat(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Latin Name
            <input
              type="text"
              value={latinCat}
              name="latinCat"
              onChange={(e) => setLatinCat(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Image
            <input
              type="text"
              value={imageCat}
              name="imageCat"
              onChange={(e) => setImageCat(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Button</button>
      </form>
      {NewListCats}
    </div>
  </>
);
}
export default CatsForm;