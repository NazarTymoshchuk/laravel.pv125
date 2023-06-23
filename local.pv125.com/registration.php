<?php
$name = "";
$email = "";
$password = "";
$phone = "";
$image = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["name"]))
        $name = $_POST["name"];
    if (isset($_POST["email"]))
        $email = $_POST["email"];
    if (isset($_POST["password"]))
        $password = $_POST["password"];
    if (isset($_POST["phone"]))
        $phone = $_POST["phone"];
    if (isset($_POST["image"]))
        $image = $_POST["image"];
    try {
        $dbh = new PDO('mysql:host=localhost;dbname=pv125', "root", "");
        $sql = "INSERT INTO users (name, image, phone, password, email) VALUES(?, ?, ?, ?, ?);";
        $sth = $dbh->prepare($sql);
        $sth->execute([$name,$image,$phone, $password, $email]);
        $dbh = null;
        header('Location: /');
        exit;
    } catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
    }
}
?>

<?php include $_SERVER["DOCUMENT_ROOT"] . "/head.php"; ?>

<?php include $_SERVER["DOCUMENT_ROOT"] . "/header.php"; ?>

<script>
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()
</script>

<div class="container">
    <h1 class="text-center">Реєстрація</h1>
    <form class="row col-md-8 offset-md-2 g-3 needs-validation" method="post">
        <div class="col-md-6">
            <label for="name" class="form-label">Ім'я</label>
            <input type="text" class="form-control" id="name" name="name" value="<?php echo $name; ?>" required>
            <div class="valid-feedback">
        </div>
        <div class="col-md-6">
            <label for="password" class="form-label">Пароль</label>
            <input type="password" class="form-control" id="password" name="password" value="<?php echo $password; ?>">
        </div>
        <div class="col-12">
            <label for="email" class="form-label">Електронна пошта</label>
            <input type="text" class="form-control" id="email" name="email" placeholder="itstep@gmail.com" value="<?php echo $email; ?>">
        </div>
        <div class="col-12">
            <label for="phone" class="form-label">Телефон</label>
            <input type="text" class="form-control" id="phone" name="phone" placeholder="38(067)43 24 344" value="<?php echo $phone; ?>">
        </div>
        <div class="col-12">
            <label for="image" class="form-label">Шлях до малюнка</label>
            <input type="text" class="form-control" id="image" name="image" placeholder="" value="<?php echo $image; ?>">
        </div>
        <div class="row justify-content-between">
            <a href="/" class="btn btn-dark col-6">На головну</a>
            <button type="submit" class="btn btn-primary col-6">Реєстрація</button>
        </div>
    </form>
</div>

<?php include $_SERVER["DOCUMENT_ROOT"]. "/footer.php"; ?>

