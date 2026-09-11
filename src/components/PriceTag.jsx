function PriceTag({ price }) {
  return <p>{"$" + price + ".00"}</p>;
}

export default PriceTag;