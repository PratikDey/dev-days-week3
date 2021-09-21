import { Button, Container, Grid, InputLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
function App() {
  return (
    <Container maxWidth="sm">
      <h1>FORM</h1>
      <Box
        sx={{
          width: 300,
          height: 300,
        }}
      >
        <Formik
          initialValues={{ email: "", rollno: "", name: "", url: "", file: "" }}
          validate={(values) => {
            const errors = {};
            if (
              !values.email ||
              !values.name ||
              !values.rollno ||
              !values.url
            ) {
              errors.email = "Required";
              errors.name = "Required";
              errors.rollno = "Required";
              errors.url = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
            let data = new FormData();
            data.append("file", values.file);
            let newData = {
              name: values.name,
              email: values.email,
              url: values.url,
              rollno: values.rollno,
            };

            axios.post("http://localhost:8000/sending", newData);
          }}
        >
          {(formProps, isSubmitting) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item>
                  <TextField
                    required
                    type="email"
                    name="email"
                    placeholder="email"
                    id="filled-basic"
                    label="Email"
                    variant="filled"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    type="text"
                    name="name"
                    id="filled-basic"
                    label="Name"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    required
                    type="text"
                    name="rollno"
                    id="filled-basic"
                    label="Roll Number"
                    variant="filled"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    type="text"
                    name="url"
                    id="filled-basic"
                    label="Url"
                    variant="filled"
                  />
                </Grid>
                <Grid item>
                  <input
                    type="file"
                    name="file"
                    onChange={(event) => {
                      formProps.setFieldValue("file", event.target.files[0]);
                    }}
                    id="file"
                  />
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default App;
