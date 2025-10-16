
function SingleCat({name, latinName, image}) {
    return (
        <div className="single-cat">
            <p>{name}</p>
            <p>{latinName}</p>
            <img src={image} alt={name} width="150" />
        </div>
    );
}

export default SingleCat;

// function SingleCat({name, latinName, image}) Declares a child component called SingleCat. 
// The parameters inside {} are props — data passed from the parent (BigCats).