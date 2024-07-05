import "./styles.css";

export default function Layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  console.log(props.modal)
  return (
    <>
      {props.modal}
      {props.children}
    </>
  );
}
