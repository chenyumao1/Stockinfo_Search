// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
// <script>
$(document).ready(function() {
    $('#loginButton').click(function(e) {
        e.preventDefault(); 
        const username = $('#usernameInput').val();
        if (!username) {
            alert('Username is required!');
            return;
        }

        $.ajax({
            url: '/login',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ username: username }),
            success: function(response) {
                window.location.href = '/search';
            },
            error: function(response) {
                alert('Error: ' + response.responseText);
            }
        });
    });
});
// </script>
