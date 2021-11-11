import { httpClient } from '../../utils/fetch'

const handler = async (req, res) => {

  const { keyword } = req.query;

  const data = await httpClient(`/everything?q=${keyword}`);

  res.status(200).json({ data });
}

export default handler
