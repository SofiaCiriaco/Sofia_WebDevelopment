        document.getElementById('studentForm').addEventListener('submit', function(event) {
            // Prevent the page from automatically refreshing on form submit
            event.preventDefault();
            const name = document.getElementById('studentName').value;
            const idNo = document.getElementById('idNumber').value;
            const gradeSection = document.getElementById('gradeSection').value;
            const age = document.getElementById('age').value;
            const email = document.getElementById('email').value;
            document.getElementById('Name').textContent = name;
            document.getElementById('ID').textContent = idNo;
            document.getElementById('Class').textContent = gradeSection;
            document.getElementById('Age').textContent = age;
            document.getElementById('Email').textContent = email;
            document.getElementById('resultBox').style.display = 'block';
        });