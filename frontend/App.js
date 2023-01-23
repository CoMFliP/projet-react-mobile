import React, {useState} from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Realm from './util/Realm';

// Élément de poste d'information
const Post = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        try {
          navigation.push('Post');
        } catch (error) {
          console.log(error);
        }
      }}>
      <View style={{paddingVertical: 8}}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Title Post</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          euismod tincidunt arcu. Maecenas rhoncus elementum neque, ut dictum mi
          lobortis non. Nunc consectetur urna vitae tortor pharetra, sit amet
          varius erat ullamcorper. Etiam pellentesque nulla nec varius viverra.
          Sed porta bibendum justo, eget faucibus ligula mollis ac. Vivamus
          pretium, elit sit amet posuere vestibulum, enim erat tempus ligula, ac
          euismod neque mauris eu urna. Proin ut vehicula lorem. Fusce eu dui
          massa
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// Liste des postes
const ListPost = () => {
  return (
    <ScrollView style={{height: '80%', marginVertical: 8}}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ScrollView>
  );
};

// Page de publication avec des informations
function PostScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>
          Title Post
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          euismod tincidunt arcu. Maecenas rhoncus elementum neque, ut dictum mi
          lobortis non. Nunc consectetur urna vitae tortor pharetra, sit amet
          varius erat ullamcorper. Etiam pellentesque nulla nec varius viverra.
          Sed porta bibendum justo, eget faucibus ligula mollis ac. Vivamus
          pretium, elit sit amet posuere vestibulum, enim erat tempus ligula, ac
          euismod neque mauris eu urna. Proin ut vehicula lorem. Fusce eu dui
          massa
        </Text>
        {loading ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Button title="Back" style={styles.button} disabled />
            <ActivityIndicator visible={loading} size="large" />
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Button
              title="Back"
              style={styles.button}
              onPress={() => navigation.goBack()}
            />
            <Button
              title="Save"
              style={styles.button}
              onPress={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 1000);
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

// Page de profil et la modifier
function ProfileScreen({navigation}) {
  const [username, setUsername] = useState('Username');
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('Password');

  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          keyboardType="text"
          onChangeText={newUsername => setUsername(newUsername)}
          defaultValue={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={newEmail => setEmail(newEmail)}
          defaultValue={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
          onChangeText={newPassword => setPassword(newPassword)}
          defaultValue={password}
        />

        {loading ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button title="Back" style={styles.button} disabled />
            <ActivityIndicator visible={loading} size="large" />
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button
              title="Back"
              style={styles.button}
              onPress={() => navigation.goBack()}
            />
            <Button
              title="Save"
              style={styles.button}
              onPress={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 1000);
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
// Page de creér a nouvelle poste
function NewPostScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const [isFocusTitle, setFocusTitle] = useState(false);
  const [isFocusText, setFocusText] = useState(false);

  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 8,
          }}>
          Create new post
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
            paddingHorizontal: 8,
          }}>
          <TextInput
            maxLength={24}
            placeholder="Title"
            keyboardType="text"
            onChangeText={newTitle => setTitle(newTitle)}
            onFocus={() => setFocusTitle(true)}
            onBlur={() => setFocusTitle(false)}
            defaultValue={title}
            style={{width: '85%', fontWeight: 'bold'}}
          />
          {isFocusTitle ? (
            title.length < 24 ? (
              <Text
                style={{
                  textAlignVertical: 'center',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                {title.length}/24
              </Text>
            ) : (
              <Text
                style={{
                  textAlignVertical: 'center',
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: 'red',
                }}>
                {title.length}/24
              </Text>
            )
          ) : null}
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: 8,
            paddingHorizontal: 8,
            height: '60%',
          }}>
          <TextInput
            multiline
            maxLength={255}
            placeholder="Text"
            keyboardType="text"
            onChangeText={newText => setText(newText)}
            onFocus={() => setFocusText(true)}
            onBlur={() => setFocusText(false)}
            defaultValue={text}
          />
          {isFocusText ? (
            text.length < 255 ? (
              <Text
                style={{
                  textAlign: 'right',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                {text.length}/255
              </Text>
            ) : (
              <Text
                style={{
                  textAlign: 'right',
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: 'red',
                }}>
                {text.length}/255
              </Text>
            )
          ) : null}
        </View>
        {loading ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Button title="Back" style={styles.button} disabled />
            <ActivityIndicator visible={loading} size="large" />
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Button
              title="Back"
              style={styles.button}
              onPress={() => navigation.goBack()}
            />
            <Button
              title="Save"
              style={styles.button}
              onPress={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 1000);
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

// Page d'accueil
function HomeScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');

  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const [user, setUser] = useState();

  // Fonction qui effectue l'autorisation de l'utilisateur
  async function loadAuth() {
    setLoading(true);
    try {
      const user = await Realm.authUser(email, password);
      setErr('');
      setSuccess('Success!');
      setLoading(false);
      setIsAuth(true);

      setTimeout(() => {
        setSuccess('');
      }, 5000);
      return user;
    } catch (error) {
      setErr(error.message);
      setSuccess('');
      setLoading(false);
      setIsAuth(false);

      setTimeout(() => {
        setErr('');
      }, 5000);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {isAuth ? (
        <View style={styles.container}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 32,
              marginVertical: 16,
            }}>
            Projet React Mobile
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button
              title="Profile"
              onPress={() => {
                navigation.push('Profile');
              }}
            />
            <Button
              title="Log Out"
              onPress={async () => {
                try {
                  await user.logOut();
                  setIsAuth(false);
                } catch (error) {
                  console.log(error);
                }
              }}
            />
          </View>
          <ScrollView style={{height: '75%', marginVertical: 8}}>
            <TouchableOpacity
              onPress={() => {
                navigation.push('Post');
              }}>
              <View style={{paddingVertical: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Title Post
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod tincidunt arcu. Maecenas rhoncus elementum
                  neque, ut dictum mi lobortis non. Nunc consectetur urna vitae
                  tortor pharetra, sit amet varius erat ullamcorper. Etiam
                  pellentesque nulla nec varius viverra. Sed porta bibendum
                  justo, eget faucibus ligula mollis ac. Vivamus pretium, elit
                  sit amet posuere vestibulum, enim erat tempus ligula, ac
                  euismod neque mauris eu urna. Proin ut vehicula lorem. Fusce
                  eu dui massa
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.push('Post');
              }}>
              <View style={{paddingVertical: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Title Post
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod tincidunt arcu. Maecenas rhoncus elementum
                  neque, ut dictum mi lobortis non. Nunc consectetur urna vitae
                  tortor pharetra, sit amet varius erat ullamcorper. Etiam
                  pellentesque nulla nec varius viverra. Sed porta bibendum
                  justo, eget faucibus ligula mollis ac. Vivamus pretium, elit
                  sit amet posuere vestibulum, enim erat tempus ligula, ac
                  euismod neque mauris eu urna. Proin ut vehicula lorem. Fusce
                  eu dui massa
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.push('Post');
              }}>
              <View style={{paddingVertical: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Title Post
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod tincidunt arcu. Maecenas rhoncus elementum
                  neque, ut dictum mi lobortis non. Nunc consectetur urna vitae
                  tortor pharetra, sit amet varius erat ullamcorper. Etiam
                  pellentesque nulla nec varius viverra. Sed porta bibendum
                  justo, eget faucibus ligula mollis ac. Vivamus pretium, elit
                  sit amet posuere vestibulum, enim erat tempus ligula, ac
                  euismod neque mauris eu urna. Proin ut vehicula lorem. Fusce
                  eu dui massa
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.push('Post');
              }}>
              <View style={{paddingVertical: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Title Post
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod tincidunt arcu. Maecenas rhoncus elementum
                  neque, ut dictum mi lobortis non. Nunc consectetur urna vitae
                  tortor pharetra, sit amet varius erat ullamcorper. Etiam
                  pellentesque nulla nec varius viverra. Sed porta bibendum
                  justo, eget faucibus ligula mollis ac. Vivamus pretium, elit
                  sit amet posuere vestibulum, enim erat tempus ligula, ac
                  euismod neque mauris eu urna. Proin ut vehicula lorem. Fusce
                  eu dui massa
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.push('Post');
              }}>
              <View style={{paddingVertical: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Title Post
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod tincidunt arcu. Maecenas rhoncus elementum
                  neque, ut dictum mi lobortis non. Nunc consectetur urna vitae
                  tortor pharetra, sit amet varius erat ullamcorper. Etiam
                  pellentesque nulla nec varius viverra. Sed porta bibendum
                  justo, eget faucibus ligula mollis ac. Vivamus pretium, elit
                  sit amet posuere vestibulum, enim erat tempus ligula, ac
                  euismod neque mauris eu urna. Proin ut vehicula lorem. Fusce
                  eu dui massa
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.push('Post');
              }}>
              <View style={{paddingVertical: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Title Post
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod tincidunt arcu. Maecenas rhoncus elementum
                  neque, ut dictum mi lobortis non. Nunc consectetur urna vitae
                  tortor pharetra, sit amet varius erat ullamcorper. Etiam
                  pellentesque nulla nec varius viverra. Sed porta bibendum
                  justo, eget faucibus ligula mollis ac. Vivamus pretium, elit
                  sit amet posuere vestibulum, enim erat tempus ligula, ac
                  euismod neque mauris eu urna. Proin ut vehicula lorem. Fusce
                  eu dui massa
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.push('Post');
              }}>
              <View style={{paddingVertical: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Title Post
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod tincidunt arcu. Maecenas rhoncus elementum
                  neque, ut dictum mi lobortis non. Nunc consectetur urna vitae
                  tortor pharetra, sit amet varius erat ullamcorper. Etiam
                  pellentesque nulla nec varius viverra. Sed porta bibendum
                  justo, eget faucibus ligula mollis ac. Vivamus pretium, elit
                  sit amet posuere vestibulum, enim erat tempus ligula, ac
                  euismod neque mauris eu urna. Proin ut vehicula lorem. Fusce
                  eu dui massa
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.push('Post');
              }}>
              <View style={{paddingVertical: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Title Post
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum euismod tincidunt arcu. Maecenas rhoncus elementum
                  neque, ut dictum mi lobortis non. Nunc consectetur urna vitae
                  tortor pharetra, sit amet varius erat ullamcorper. Etiam
                  pellentesque nulla nec varius viverra. Sed porta bibendum
                  justo, eget faucibus ligula mollis ac. Vivamus pretium, elit
                  sit amet posuere vestibulum, enim erat tempus ligula, ac
                  euismod neque mauris eu urna. Proin ut vehicula lorem. Fusce
                  eu dui massa
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <Button
            title="New post"
            style={styles.button}
            onPress={() => {
              navigation.push('NewPost');
            }}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 32}}>
            Projet React Mobile
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={newEmail => setEmail(newEmail)}
            defaultValue={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={newPassword => setPassword(newPassword)}
            defaultValue={password}
          />

          {loading ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Button title="Register" style={styles.button} disabled />
              <ActivityIndicator visible={loading} size="large" />
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Button
                title="Register"
                style={styles.button}
                onPress={() => navigation.push('Register')}
              />
              <Button
                title="Login"
                style={styles.button}
                onPress={async () => {
                  setUser(await loadAuth());
                }}
              />
            </View>
          )}

          {err.length !== 0 ? (
            <Text style={{color: 'red'}}>* {err}</Text>
          ) : null}
          {success.length !== 0 ? (
            <Text style={{color: 'green'}}>* {success}</Text>
          ) : null}
        </View>
      )}
    </SafeAreaView>
  );
}

// Page de registres nouvelle account
function RegisterScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');

  const [loading, setLoading] = useState(false);

 // Fonction qui effectue registre de nouveaux utilisateur
  async function loadCreateAuth() {
    if (rePassword === password) {
      setLoading(true);
      await Realm.createUser(email, password)
        .then(resp => {
          setErr('');
          setSuccess('Success!');
          setTimeout(() => {
            navigation.goBack();
            setLoading(false);
          }, 5000);
          return resp;
        })
        .catch(error => {
          setErr(error.message);
          setLoading(false);
          return error.message;
        });
    } else {
      setErr('Is not same password');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={newEmail => setEmail(newEmail)}
          defaultValue={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
          onChangeText={newPassword => setPassword(newPassword)}
          defaultValue={password}
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          keyboardType="default"
          secureTextEntry={true}
          onChangeText={newRePassword => setRePassword(newRePassword)}
          defaultValue={rePassword}
        />

        {loading ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button title="Back" disabled />
            <ActivityIndicator
              visible={loading}
              textContent={'Loading...'}
              size="small"
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button title="Back" onPress={() => navigation.goBack()} />
            <Button title="Create account" onPress={() => loadCreateAuth()} />
          </View>
        )}

        {err.length !== 0 ? <Text style={{color: 'red'}}>* {err}</Text> : null}
        {success.length !== 0 ? (
          <Text style={{color: 'green'}}>* {success}</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="NewPost" component={NewPostScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  button: {
    padding: 8,
  },
  input: {
    marginVertical: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
