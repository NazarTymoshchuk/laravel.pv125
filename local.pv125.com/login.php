<?php include $_SERVER["DOCUMENT_ROOT"]. "/head.php"; ?>

<?php include $_SERVER["DOCUMENT_ROOT"]. "/header.php"; ?>

<div class="container my-3">
    <h2>Login</h2>
    <form class="row g-3">
        <div class="col-md-12">
            <label for="inputEmail4" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputEmail4">
        </div>
        <div class="col-md-12">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4">
        </div>

        <button type="submit" class="btn btn-dark col-6">Back</button>
        <button type="submit" class="btn btn-primary col-6">Sign in</button>
    </form>
</div>

<?php include $_SERVER["DOCUMENT_ROOT"]. "/footer.php"; ?>