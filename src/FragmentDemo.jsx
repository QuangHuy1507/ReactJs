function WithDiv() {
  return (
    <div>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  );
}

function WithFragment() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}

function FragmentDemo() {
  return (
    <div>
      <WithDiv />
      <hr />
      <WithFragment />
    </div>
  );
}

export default FragmentDemo;