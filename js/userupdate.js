




    // ========== READ ==========
    // watch the database ref for changes
  _userRef.onSnapshot(snapshotData => {
      let users = [];
      snapshotData.forEach(doc => {
        let user = doc.data();
        user.id = doc.id;
        users.push(user);
      });
      appendUsers(users);
    });


  // append users to the DOM
  appendUsers(users){
    let htmlTemplate = "";
    for (let user of users) {
      htmlTemplate += `
      <article>
        <h2>${user.name}</h2>
        <img src="${user.img}">
        <p><a href="mailto:${user.mail}">${user.mail}</a></p>
        <button onclick="selectUser('${user.id}','${user.name}', '${user.mail}', '${user.img}')">Update</button>
        <button onclick="deleteUser('${user.id}')">Delete</button>
      </article>
      `;
    }
    document.querySelector('#user-container').innerHTML = htmlTemplate;
  }

  // ========== CREATE ==========
  // add a new user to firestore (database)
  create(name, mail, img) {
    _userRef.add({
      name,
      mail,
      img
    });
  }

  // ========== UPDATE ==========
  update(id, name, mail, img) {
  _userRef.doc(id).set({
      name,
      mail,
      img
    });
  }

  // ========== DELETE ==========
  delete(id) {
  _userRef.doc(id).delete();
  }
