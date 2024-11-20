import { Form } from "react-bootstrap"
import { useForm } from "../../Hooks/useForm"

// const {handleChange, values, resetForm} = useForm({
//     nombre:'',
//     imagen:'',
//     precio: 0
// })
export const FormProduct = () => {
  return (
    <Form className="p-4 border rounded m-3">
        <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="nombre" placeholder="Ingrese nombre producto" value={"name"} onChange={}>
            </Form.Control>
        </Form.Group>
    </Form>
  )
}
