import Form from "@/components/Form/Form";

const SignUpPage = () => {
  return (
    <main className="all-pages">
      {" "}
      <Form btnTitle="Sign Up" apiUrl="http://localhost:3000/api/auth/signup" />
    </main>
  );
};

export default SignUpPage;
