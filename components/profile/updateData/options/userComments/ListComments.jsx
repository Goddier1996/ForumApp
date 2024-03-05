import { View, Text, Modal, FlatList } from "react-native";
import styles from "../../../style/profile.style";
import { DotIndicator } from "react-native-indicators";
import { DataTable } from "react-native-paper";
import CloseButton from "../tools/CloseButton";
import ButtonDelete from "../tools/ButtonDelete";



const ListComments = ({
  DataComment,
  modalVisibleMessages,
  setModalVisibleMessages,
}) => {


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisibleMessages}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            {/* close model */}
            {!DataComment.loading ? (
              <CloseButton setModalVisible={setModalVisibleMessages} />
            ) : null}

            <DataTable>
              <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={styles.tablePosition}>
                  <Text>Comment's</Text>
                </DataTable.Title>
              </DataTable.Header>

              {DataComment.loading ? (
                <DotIndicator size={5} color="rgba(0, 0, 0, 0.475)" />
              ) : !DataComment.loading && DataComment.error ? (
                <Text>Error: {DataComment.error}</Text>
              ) : null}

              {!DataComment.loading ? (
                DataComment.length === 0 ? (
                  <View style={styles.notHaveItems}>
                    <Text>You Don't Have Comment's!</Text>
                  </View>
                ) : (
                  <FlatList
                    style={styles.notificationList}
                    enableEmptySections={true}
                    data={DataComment}
                    renderItem={({ item }) => {
                      return (
                        <>
                          <DataTable.Row
                            key={item._id}
                            style={styles.notificationBoxComments}
                          >
                            <DataTable.Cell>
                              <Text style={styles.tablePosition}>
                                {item.MessageUser}
                              </Text>
                            </DataTable.Cell>
                          </DataTable.Row>

                          <View style={styles.showOptionsDeleteAndShowDate}>
                            <Text style={styles.dateComment}>
                              Date Publish: {item.DatePublished}
                            </Text>

                            <ButtonDelete data={item} type={"delete comment"} />
                          </View>
                        </>
                      );
                    }}
                  />
                )
              ) : null}
            </DataTable>
          </View>
        </View>
      </View>
    </Modal>
  );
};


export default ListComments;