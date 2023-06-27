<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Login Facebook (antiga)</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <header>
        <!--Center-->
        <div class="center">

            <div class="logo">
                <h2>Facebook</h2>
            </div>


            <form method="post" class="form-login">
                <div class="form-element">
                    <p>E-mail ou telefone:</p>
                    <input type="email" />
                </div>
                <div class="form-element">
                    <p>Senha:</p>
                    <input type="password" />
                </div>
                <div class="form-element">
                    <input type="submit" name="acao" value="Enviar" />
                </div>
            </form>
            <div class="clear"></div>

        </div>
        <!--Fechamento do center-->
    </header>

    <section class="main">
        <div class="center">
            <div class="img-pessoas">
                <img src="img/img1.png" />
            </div>

            <div class="abrir-conta">
                <h2>Abra sua conta</h2>
                <h3>É gratuito e sempre será.</h3>

                <form class="criar-conta">

                    <div class="w50">
                        <input type="text" placeholder="Nome" />
                    </div>

                    <div class="w50">
                        <input type="text" placeholder="Sobrenome" />
                    </div>

                    <div class="w100">
                        <input type="email" placeholder="E-mail" />
                    </div>

                    <div class="w100">
                        <input type="password" placeholder="Senha" />
                    </div>

                    <div class="w100">
                        <h2>Data de Nascimento:</h2>

                        <select name="nascimento-dia" class="nascimento">
                            <?php
                            for ($i = 1; $i <= 31; $i++) {
                            ?>
                                <option value="<?php echo $i; ?>"><?php echo $i ?></option>
                            <?php } ?>
                        </select>

                        <select name="nascimento-mes" class="nascimento">
                            <option value="0">Junho</option>
                        </select>

                        <select name="nascimento-ano" class="nascimento">
                            <?php
                            for ($i = 1900; $i <= 2023; $i++) {
                            ?>
                                <option value="<?php echo $i; ?>"><?php echo $i ?></option>
                            <?php } ?>
                        </select>

                        <div class="clear"></div>
                    </div>

                    <div class="w100">
                        <div class="input-radio">
                            <input type="radio" value="Masculino" name="sexo">
                            <h2>Masculino</h2>
                        </div>
                        <div class="input-radio">
                            <input type="radio" value="Feminino" name="sexo">
                            <h2>Feminino</h2>
                        </div>
                        <div class="clear"></div>
                    </div>

                    <div class="w100">
                        <input type="submit" name="acao" value="Cadastrar" />
                    </div>

                    <div class="clear"></div>

                </form>

            </div>

            <div class="clear"></div>
        </div>
    </section>

    <section class="linguas">
        <div class="center">
            <a class="selected-lingua" href="#">Português (BR)</a>
            <a href="#">English (US)</a>
            <a href="#">Español</a>
            <a href="#">Français (France)</a>
            <a href="#">Italiano</a>
            <a href="#">Deutsch</a>
        </div>

        <div style="border:0; padding-top:10px;" class="center">
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Lorem Ipsum</a>
        </div>
    </section>

</body>

</html>