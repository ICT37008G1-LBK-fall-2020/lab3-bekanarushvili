// დაწერეთ სკრიპტი, რომელიც სახელების მოცემული 2 სიიდან (შეაქვს მომხმარებელს)
// შეადგენს გაერთიანებულ სიას ისე, რომ სახელები არ მეორდებოდეს


let sia1 = [];
let sia2 = [];

let saxeli;
let message;


for (let i=0; i<2; i++)
{
    let tvla = 0;
    
    if (i)
    {
        message = 'შეიყვანე სტუდენტთა რაოდენობა (მეორე სიისთვის:)';
        messageName = 'შეიყვანე სტუდენტის სახელი (მეორე სიისთვის:)';
    }
    else
    {
        message = 'შეიყვანე სტუდენტთა რაოდენობა (პირველი სიისთვის):';
        messageName = 'შეიყვანე სტუდენტის სახელი (პირველი სიისთვის):';
    }
    
    let StudenttaTvla = parseInt(prompt(message, ''));
    while (tvla < StudenttaTvla)
    {
        saxeli = prompt(messageName, '');
        if (i)
        {
            sia2.push(saxeli);
        }
        else
        {
            sia1.push(saxeli);
        }
        tvla++;
    }
}

for (let i = 0; i < sia1.length; i++)
{
    let emtxveva = false;
    for (let j = 0; j < sia2.length; j++)
    {
        if (sia2[j] == sia1[i])
        {
            emtxveva = true;
            break;
        }
    }
    if (!emtxveva)
    {
        sia2.push(sia1[i]);
    }
}


alert (sia2);