function DisplayBox({ condition, children }) {
  return condition ? children : null;
}

export function DisplayBoxDemo() {
  const displayMessage = "Hallo";
  const displayError = true;
  // ...

  return (
    <div>
      {displayError ? (
        <p>Ops - es ist ein Fehler ....</p>
      ) : null}
      <hr />
      <DisplayBox condition={displayError}>
        <p>Ops - es ist ein Fehler ....</p>
        {displayMessage}
        <b>testesteste</b>
      </DisplayBox>
      <hr />
    </div>
  );
}
