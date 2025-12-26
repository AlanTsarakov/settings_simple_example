function main()
{
    const selectedValue = document.querySelector('input[name="theme"]:checked').value;
    const font = document.querySelector('#font');

    if (!selectedValue) {
        console.error('Радиокнопка не найдена!');
        return;
    }

    if (selectedValue == "dark")
    {
        document.querySelector("body").style.backgroundColor = "rgba(26, 26, 26, 0.2)";
    }

    if (selectedValue == "white")
    {
        document.querySelector("body").style.backgroundColor = "rgba(255, 255, 255, 1)";
    }

    if (font.value == "Times New Roman")
    {
        document.querySelector("body").style.fontFamily = "Times New Roman";
    }
    if (font.value == "Arial")
    {
        document.querySelector("body").style.fontFamily = "Arial";
    }
}


