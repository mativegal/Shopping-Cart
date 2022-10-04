import { Col, Row } from 'react-bootstrap'
import StoreItem from '../components/StoreItem'
import storeItems from '../data/items.json'

const Store = () => {
  return (
    <>
      <div>Store</div>
      <Row md={2} xs={1} lg={3} className="g3">
        {storeItems.map((item) => (
          <>
            <Col key={item.id} className="mt-3">
              <StoreItem {...item} />
            </Col>
          </>
        ))}
      </Row>
    </>
  )
}

export default Store
