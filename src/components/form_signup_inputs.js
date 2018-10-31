const firstNameForm = field => {
  return (
    <div>
      <label htmlFor="firstName" className="sr-only">
        Hello
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        className="form-control"
        placeholder="Hello"
        required
        autoFocus
      />
    </div>
  );
};

const lastNameForm = field => {
  return (
    <div>
      <label htmlFor="lastName" className="sr-only">
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        className="form-control"
        placeholder="Last Name"
        required
      />
    </div>
  );
};

const emailForm = field => {
  return (
    <div>
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        type="text"
        id="email"
        name="email"
        className="form-control"
        placeholder="Email address"
        required
      />
    </div>
  );
};

const passwordForm = field => {
  return (
    <div>
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="form-control"
        placeholder="Password"
        required
      />
    </div>
  );
};

const passwordConfirmForm = field => {
  return (
    <div>
      <label htmlFor="passwordConfirm" className="sr-only">
        Password Confirm
      </label>
      <input
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        className="form-control"
        placeholder="Password Confirm"
        required
      />
    </div>
  );
};
