import { Heading } from './styles'
import ReactCurvedText from 'react-curved-text'

const Logo = () => {
  return (
    <Heading spin>
          <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={150}
            rx={100}
            ry={100}
            startOffset={0}
            reversed={true}
            text="Is it weekend yet?"
        />
        </Heading>
  )
}

export default Logo