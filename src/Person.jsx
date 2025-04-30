function Person({ name, age, image, id }) {
  console.log(image);
  return (
    <section>
      <p>{name}</p>
      <p>{age}</p>
      <img src={image} alt={id} style={{ maxHeight: 100 }} />
    </section>
  );
}

export default Person;
