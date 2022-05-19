import Form from "../Components/Form";
import Header from "../Components/shared/Header";
export default function AuthViewModule() {
  return (
    <>
      <Header />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Form />
      </div>
    </>
  );
}
