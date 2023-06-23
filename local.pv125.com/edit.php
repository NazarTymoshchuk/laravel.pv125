<?php
$id=$_GET["id"];
include $_SERVER["DOCUMENT_ROOT"] . "/connection_database.php";
if (isset($dbh)) {
    if (!isset($_GET['id'])) {
        die('User ID not provided.');
    }
    $sql = "SELECT * FROM users WHERE id = :id";
    $stmt = $dbh->prepare($sql);
    $stmt->execute(['id' => $id]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$user) {
        die('User not found.');
    }
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the updated data from the form submission
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $phone = $_POST['phone'];
    $image = $_POST['image'];

    // Update the user record in the database
    $sql = "UPDATE users SET name = :name, email = :email, password = :password, phone = :phone, image = :image WHERE id = :id";
    $stmt = $dbh->prepare($sql);
    $stmt->execute([
        'name' => $name,
        'email' => $email,
        'password' => $password,
        'phone' => $phone,
        'image' => $image,
        'id' => $id,
    ]);
    $dbh = null;
    header('Location: /');
    exit;
}
?>
<?php include $_SERVER["DOCUMENT_ROOT"] . "/head.php"; ?>

<?php include $_SERVER["DOCUMENT_ROOT"] . "/header.php"; ?>

<div class="container">
    <h1 class="text-center">Реєстрація</h1>
    <form class="row col-md-8 offset-md-2 g-3 needs-validation" method="post">
        <div class="col-md-6">
            <label for="name" class="form-label">Ім'я</label>
            <input type="text" class="form-control" id="name" name="name" value="<?php echo $user['name']; ?>" required>
            <div class="valid-feedback">
            </div>
            <div class="col-md-6">
                <label for="password" class="form-label">Пароль</label>
                <input type="password" class="form-control" id="password" name="password" value="<?php echo $user['password']; ?>">
            </div>
            <div class="col-12">
                <label for="email" class="form-label">Електронна пошта</label>
                <input type="text" class="form-control" id="email" name="email" placeholder="itstep@gmail.com" value="<?php echo $user['email']; ?>">
            </div>
            <div class="col-12">
                <label for="phone" class="form-label">Телефон</label>
                <input type="text" class="form-control" id="phone" name="phone" placeholder="38(067)43 24 344" value="<?php echo $user['phone']; ?>">
            </div>
            <div class="col-12">
                <label for="image" class="form-label">Шлях до малюнка</label>
                <input type="text" class="form-control" id="image" name="image" placeholder="" value="<?php echo $user['image']; ?>">
            </div>
            <a href="/" class="btn btn-dark col-6">На головну</a>
            <button type="submit" class="btn btn-primary col-6">Реєстрація</button>
    </form>
</div>

<?php include $_SERVER["DOCUMENT_ROOT"] . "/footer.php"; ?>