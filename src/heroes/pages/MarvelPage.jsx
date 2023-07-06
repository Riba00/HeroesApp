import { HeroesList } from '../components';

export const MarvelPage = () => {
  return (
    <div className='mt-2'>
      <h1>Marvel Comics</h1>
      <hr />

      <HeroesList publisher='Marvel Comics' />
    </div>
  )
}