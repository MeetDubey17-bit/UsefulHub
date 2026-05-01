import { useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  useEffect(() => {
      async function loadWebsites() {
            const snapshot = await getDocs(collection(db, "websites"));

                  snapshot.forEach((doc) => {
                          console.log(doc.data());
                                });
                                    }

                                        loadWebsites();
                                          }, []);

                                            return (
                                                <div>
                                                      <h1>UsefulHub</h1>
                                                          </div>
                                                            );
                                                            }

                                                            export default App;
