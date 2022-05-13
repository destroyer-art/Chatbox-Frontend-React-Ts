export const users = [
  {
    userId: '123123123',
    icon: '/small-totoro.png',
    nickName: 'Anna Brusssssss',
    quote: 'Love beach',
  },
  {
    userId: '567567567',
    icon: '/totoro.png',
    nickName: 'Bathman',
    quote: 'Love lifesssssssssssssssssssssssss',
  },
];

const nameLimit = 10;
const quoteLimit = 10;

users.map((user) => {
  user.nickName.length >= nameLimit
    ? (user.nickName = user.nickName.slice(0, nameLimit).concat('.'))
    : undefined;
  user.quote.length >= quoteLimit
    ? (user.quote = user.quote.slice(0, quoteLimit).concat('...'))
    : undefined;
});
