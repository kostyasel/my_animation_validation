window.onload = function (event) {
    let loader = $('#loader');
    $('#submit').click(function () {
        $('.error_input').hide();
        let Name = $('#Name');
        let Last_name = $('#Last_name');
        let Phone = $('#type');

        let hasError = false;

        if (!Name.val()) {
            Name.siblings('.error_input').show();
            Name.addClass('red-border');
            hasError = true;
        } else {
            Name.removeClass('red-border')
        }

        if (!Last_name.val()) {
            Last_name.siblings('.error_input').show();
            Last_name.addClass('red-border');
            hasError = true;
        } else{
            Last_name.removeClass('red-border');
        }


        if (!Phone.val()) {
            Phone.siblings('.error_input').show();
            Phone.addClass('red-border');
            hasError = true;
        } else{
            Phone.removeClass('red-border');
        }

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: 'https://itlogia.ru/test/checkout',
                data: {name: Name.val(), last_name: Last_name.val(), type: Phone.val()}

            })
                .done(function (message) {
                    loader.hide();
                    console.log(message);
                    if (message.success) {
                        $('form').hide();
                        $('#notice').css('display', 'block');
                        $('#order-container').css('alignItems', 'center');
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }

                });
        }


    });
}