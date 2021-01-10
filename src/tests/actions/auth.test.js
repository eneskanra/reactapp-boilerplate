import { login, logout } from "../../actions/auth";

test('should login', () => {
    const uid = 'abc123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should logout', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});