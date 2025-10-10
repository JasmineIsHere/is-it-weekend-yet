import { Heading } from './styles'
import ReactCurvedText from 'react-curved-text'

const Logo = () => {
  return (
    <Heading spin>
          <ReactCurvedText
            width={600}
            height={600}
            cx={300}
            cy={300}
            rx={200}
            ry={200}
            startOffset={0}
            reversed={true}
            text="Is it weekend yet?"
        />
        </Heading>
  )
}

export default Logo