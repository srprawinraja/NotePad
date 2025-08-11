# Notepad App - Notes for Understanding & Interview

---

## Components

### ListNotes

- Displays a note in a list form.
- Receives props: `date`, `title`, and `content`.

---

## Navigation

### NavigationContainer

- Imported component from React Navigation.
- Wraps the entire navigation structure in a React Native app.
- Manages navigation state, history, and deep linking internally.
- There must be exactly one `NavigationContainer` wrapping your navigators.

---

### createNativeStackNavigator

- Imported function from React Navigation.
- Returns an object containing components used for stack navigation.
- Used to create `Stack.Navigator` and `Stack.Screen` components.
- The navigation container typically wraps the `Stack.Navigator`.

---

### Stack.Navigator

- Component that wraps multiple `Stack.Screen` components.
- Manages the navigation stack (push/pop behavior).
- Accepts props such as `initialRouteName` to define the default screen.

---

### Stack.Screen

- Defines an individual screen in the navigation stack.
- Accepts props like:
  - `name`: unique identifier for the screen.
  - `component`: the React component to render for that screen.

---

### NativeStackScreenProps

- A TypeScript type from `@react-navigation/native-stack`.
- Types the props passed to a screen component, including `navigation` and `route`.
- Helps provide type safety for navigation methods and route parameters.

---

### Props passed to each screen

- `navigation`: object with methods to navigate between screens (e.g., `navigate`, `goBack`).
- `route`: object containing details about the current route and any params passed to it.

---

## SEARCH
- Use `useState` for search text.
- Keep two state lists: all notes and filtered notes.
- Use `useEffect` to watch search text changes.
- If search text is empty, filtered notes = all notes.
- Else, filtered notes = notes matching search text.
