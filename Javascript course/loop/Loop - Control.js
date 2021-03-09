var i, x;

MainLoop: // label

for (i = 5; i <= 10; i++) {

    ChildLoop: // label

    for (x = 15; x <= 20; x++) {

        if (x === 17) {

            break ChildLoop; // التوقف عنجد اهذه القيمة
            // Contenu Label; تجاهل هذه القيمو والاكمال 

        }

        console.log(i, x);

    }

}