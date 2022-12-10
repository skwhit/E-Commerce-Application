const [selectedButton, setSelectedButton] = useState(Active.light);
const [defaultButton, setDefaultButton] = useState(Default.light);

const Active = {
    light: "background-color: rgb(72, 91, 123); color: white",
    dark: "background-color: white; color: rgb(72, 91, 123)"
  };
  const Default = {
    light: "background-color: white; color: black",
    dark: "background-color: black; color: white"
  }

  useEffect(() => {
    console.log("selected", selectedButton,"default", defaultButton)
    if (theme == "light") {
      setSelectedButton(Active.dark)
      setDefaultButton(Default.dark)
    } else {
      setSelectedButton(Active.light)
      setDefaultButton(Default.light)
    }
  }, [theme] )

const categoryStyles = {
    color: theme === "light" ? "rgb(72, 91, 123)" : "white",

    backgroundColor: theme === "light" ? "white" : "rgb(72, 91, 123)",
  };