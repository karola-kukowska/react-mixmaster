import axios from "axios";
import { Form, useNavigation } from "react-router-dom";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>Newsletter</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          required
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          e-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue="test@test.com"
          className="form-input"
        />
      </div>
      <button
        className="btn btn-block"
        type="submit"
        style={{ marginTop: "1rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting" : "sign up"}
      </button>
    </Form>
  );
};
export default Newsletter;
