import { httpClient } from '../../utils/fetch'

const handler = async (req, res) => {

  const { keyword } = req.query;

  const today  = new Date();

  const customDate = today.toLocaleDateString("en-US")

  const currentDateFormat = customDate.split('/').reverse().join('-')

  const { data } = await httpClient(`/everything?q=${keyword}&from=${currentDateFormat}&ortBy=publishedAt`);

  res.status(200).json({ articles: data });
}

export default handler
