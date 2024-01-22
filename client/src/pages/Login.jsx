import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { loginUser, loginError, loginInfo, updateLoginInfo, isLoginLoading } =
    useContext(AuthContext);
  return (
    <>
      <Form onSubmit={loginUser}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Login</h2>
              <Form.Control
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, email: e.target.value })
                }
                type="email"
                placeholder="Email"
              />
              <Form.Control
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, password: e.target.value })
                }
                type="password"
                placeholder="Password"
              />
              <Button variant="primary" type="submit">
                {isLoginLoading ? "Getting you in .." : "Login"}
              </Button>
              {loginError?.error && (
                <Alert variant="danger">
                  <p>{loginError?.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;
