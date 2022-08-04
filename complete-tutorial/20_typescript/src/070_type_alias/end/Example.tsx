// POINT 型エイリアスについて学ぼう
const Example = () => {
    // プリミティブ(すでに用意されている)型を組みわせて新たな名前をつけること
    type User = {
        name: string,
        age: number
    }
    const user: User = { name: 'Taro', age: 10 }

    type UserName = string;
    type UserAge = number;
    type UserGender = "man" | "woman" | "others";

    type UserProfile = {
        name: UserName,
        age: UserAge,
        gender: UserGender,
    }

    const userProfile: UserProfile = {
        name: 'Hanako',
        age: 21,
        gender: "woman"
    }
    console.log(userProfile.name);
    user.name = 'kkk'
    console.log(user)
};

export default Example;
