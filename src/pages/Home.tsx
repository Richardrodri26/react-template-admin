import { Grilla } from "@/components/grilla"


export const Home = () => {
  return (
    <div>
      <Grilla thead={[{ label: "columna 1", param: "" }, { label: "columna 2", param: "" }, { label: "columna 3", param: "" }, { label: "columna 4", param: "" }]} url="" withoutTopActions>
        <tbody>
          <tr>
            <td>Columna 1</td>
            <td>Columna 2</td>
            <td>Columna 3</td>
            <td>Columna 4</td>
          </tr>
          <tr>
            <td>Columna 1</td>
            <td>Columna 2</td>
            <td>Columna 3</td>
            <td>Columna 4</td>
          </tr>
          <tr>
            <td>Columna 1</td>
            <td>Columna 2</td>
            <td>Columna 3</td>
            <td>Columna 4</td>
          </tr>
          <tr>
            <td>Columna 1</td>
            <td>Columna 2</td>
            <td>Columna 3</td>
            <td>Columna 4</td>
          </tr>

        </tbody>
      </Grilla>
    </div>
  )
}
