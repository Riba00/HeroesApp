import { HeroesList } from '../components';

export const DcPage = () => {
  return (
    <div className='mt-2'>
      <h1>DC Comics</h1>
      <hr />

      <HeroesList publisher='DC Comics' />
    </div>
  )
}
