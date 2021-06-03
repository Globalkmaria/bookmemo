let accounts = [{ number: 1, id: 'test', password: '1234', token: 'abcd' }];
let nextNum = Math.max(...accounts.map((account) => account.number));
let localData = [
  {
    token: 'abcd',
    data: [
      {
        id: 1,
        data: {
          itemTitle: '리액트를 마스터하자!',
          date: '2021년 5월 11일',
          title: '리액트를 다루는 기술',
          authors: ['김민준'],
          publisher: '길벗',
          publishedDate: '2018-08-01',
          text: '리액트는 참 좋아!!',
          thumbnail:
            'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1598637%3Ftimestamp%3D20210103145731',
        },
        editedTime: 1620741937973,
      },
      {
        id: 2,
        data: {
          itemTitle: '할아버지가 들려주는',
          date: '2021년 5월 11일',
          title: '그래도 계속 가라(양장본 HardCover)',
          authors: ['조셉 M. 마셜'],
          publisher: '조화로운삶',
          publishedDate: '2008-03-21',
          text: '언제나 힘이되는 책!',
          thumbnail:
            'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1370643%3Ftimestamp%3D20201102133843',
        },
        editedTime: 1620742041392,
      },
    ],
  },
];

const maketoken = (password) => {
  let unicode = '';
  for (let i = 0; i < password.length; i++) {
    unicode += password.charCodeAt(i).toString(16);
  }
  return unicode;
};
export const getToken = (id, password) =>
  new Promise((res, reject) => {
    const user = accounts.find((acount) => acount.id === id);
    if (user) {
      if (user.password === password) {
        setTimeout(() => {
          res({ token: user.token });
        }, 500);
      }
    } else {
      reject(new Error('사용자를 찾을 수 없습니다.'));
    }
  });
export const saveAccount = (id, password) =>
  new Promise((res, reject) => {
    if (!accounts.find((account) => account.id === id)) {
      accounts = [
        ...accounts,
        { number: nextNum, id, password, token: maketoken(password) },
      ];
      console.log(accounts);
      setTimeout(() => {
        res('account created');
      }, 500);
    } else {
      console.log('reject');
      reject(
        new Error(
          '같은 아이디의 계정이 존재합니다. 다른 아이디를 입력해주세요.'
        )
      );
    }
  });

export const getLocalItems = (token) =>
  new Promise((res, reject) => {
    console.log(token);
    console.log('getlocalItem 실행');
    if (token) {
      setTimeout(() => {
        // res(JSON.stringify(localStorage.getItem(`${token}_items`)));
        console.log('settimeout');
        const data = localData.find((d) => d.token === token);
        if (data) {
          res(data);
        } else {
          res([]);
        }
      }, 500);
    } else {
      reject(new Error('unexpected error'));
    }
  });
export const saveLocalItems = (token, items) =>
  new Promise((res, reject) => {
    if (token) {
      if (!localData.filter((d) => d.token === token)) {
        localData = localData.concat({ token: token, data: items });
      } else {
        localData = localData.map((d) =>
          d.token === token ? { token: token, data: items } : d
        );
      }
      setTimeout(() => {
        // localStorage.setItem(`${token}_items`, JSON.parse(items));
        res('saved');
      }, 500);
    } else {
      reject(new Error('저장에 실패했습니다.'));
    }
  });
