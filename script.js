function login() {
            let username = document.getElementById("user").value;
            let password = document.getElementById("pass").value;
            let msg = document.getElementById("login-message");

            let correctUser = "pavan";
            let correctPass = "1234";

            if (username === "" || password === "") {
                msg.innerHTML = "Please enter both username and password";
                msg.style.color = "orange";
                return;
            }

            if (username === correctUser && password === correctPass) {
                msg.innerHTML = "Login Success! Redirecting to Dashboard...";
                msg.style.color = "green";

                document.getElementById("student-name").innerHTML = username;
                document.getElementById("dash-name").innerHTML = "Akula Hema Sankar Pavan Kumar";

                document.getElementById("login-section").style.display = "none";
                document.getElementById("dashboard").style.display = "block";
            } else {
                msg.innerHTML = "Incorrect Username or Password";
                msg.style.color = "red";
            }
        }

        function calculateMarks() {
            let m1 = Number(document.getElementById("m1").value);
            let m2 = Number(document.getElementById("m2").value);
            let m3 = Number(document.getElementById("m3").value);
            let m4 = Number(document.getElementById("m4").value);
            let m5 = Number(document.getElementById("m5").value);

            let output = document.getElementById("marks-output");

            if (isNaN(m1) || isNaN(m2) || isNaN(m3) || isNaN(m4) || isNaN(m5)) {
                output.innerHTML = "Please enter all 5 subject marks.";
                output.style.color = "orange";
                return;
            }

            let total = m1 + m2 + m3 + m4 + m5;
            let avg = total / 5;

            let resultText = "Total: " + total + " | Average: " + avg.toFixed(2);

            if (avg >= 35) {
                resultText += " | Result: PASS 🎉";
                output.style.color = "green";
            } else {
                resultText += " | Result: FAIL ❌";
                output.style.color = "red";
            }

            output.innerHTML = resultText;
        }