export const users = [
  {
    icon: "",
    nickName: "Anna Brusssssss",
    quote: "Love beach",
  },
  {
    icon: "",
    nickName: "Bathman",
    quote: "Love lifesssssssssssssssssssssssss",
  },
]

const nameLimit = 20
const quoteLimit = 10

users.map((user) => {
  user.nickName.length >= nameLimit
    ? (user.nickName = user.nickName.slice(0, nameLimit).concat("."))
    : undefined
  user.quote.length >= quoteLimit
    ? (user.quote = user.quote.slice(0, quoteLimit).concat("..."))
    : undefined
})

export const defaultImageUrl =
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
