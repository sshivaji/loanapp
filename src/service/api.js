// base url
// const baseUrl = "https://narrow-cymbal.glitch.me";
const baseUrl = "https://db.firstmovechess.org";
// const baseUrl = "http://localhost:7777";

function postData(url, data) {
  return fetch(baseUrl + url, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  })
    .then(response => response.json())
    .then(responseData => responseData)
    .catch(err => {
      console.log(err);
      return { error: true, msg: err };
    });
}

function getData(url) {
  return fetch(baseUrl + url, {
    method: "GET"
  })
    .then(response => response.json())
    .then(responseData => responseData)
    .catch(err => {
      console.log(err);
      return { error: true, msg: err };
    });
}

function putData(url, data) {
  return fetch(baseUrl + url, {
    body: JSON.stringify(data),
    method: "PUT"
  })
    .then(response => response.json())
    .then(responseData => responseData)
    .catch(err => {
      console.log(err);
      return { error: true, msg: err };
    });
}

function deleteData(url) {
  return fetch(baseUrl + url, {
    method: "DELETE",
  })
    .then(response => response.json())
    .then(responseData => responseData)
    .catch(err => {
      return { error: true, msg: err };
    });
}
export default class FetchService {
  static signin(data) {
    return postData("/login", data);
  }
  static signup(data) {
    return postData("/register", data);
  }
  static forgotpass(data) {
        return postData("/forgotpass", data);
  }
  static report(teacherId) {
    return getData("/reports/" + teacherId);
  }
  static student(teacherId) {
    return getData("/students/" + teacherId);
  }

  static lesson(role, username, id) {
    // console.log("fetching lessons");
    return getData("/lessons/" + role + "/" +username+ "/" + id);
  }

  static resetScore(data) {
    return postData("/student/lesson", data);
  }
  static update(data) {
    return postData('/student/update', data)
  }
  static delete(id) {
    return postData('/student/delete' + id)
  }
  static add_student(data) {
    return postData('/student/create',data)
  }
}
