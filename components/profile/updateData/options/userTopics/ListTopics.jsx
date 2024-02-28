import { View, Text, Modal, FlatList } from "react-native";
import styles from "../../../style/profile.style";
import { DotIndicator } from "react-native-indicators";
import { DataTable } from "react-native-paper";
import CloseButton from "../tools/CloseButton";
import ButtonDelete from "../tools/ButtonDelete";


const ListTopics = ({
  DataTopicsUser,
  modalVisibleTopic,
  setModalVisibleTopic,
}) => {

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisibleTopic}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>

          {/* close Model */}
          <CloseButton setModalVisible={setModalVisibleTopic} />

          <DataTable>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title style={styles.tablePosition}>
                Topic
              </DataTable.Title>
              <DataTable.Title style={styles.tablePosition}>
                Date Publish
              </DataTable.Title>
              <DataTable.Title style={styles.tablePosition}>
                Delete
              </DataTable.Title>
            </DataTable.Header>

            {DataTopicsUser.loading ? (
              <DotIndicator size={5} color="rgba(0, 0, 0, 0.475)" />
            ) : !DataTopicsUser.loading && DataTopicsUser.error ? (
              <Text>Error: {DataTopicsUser.error}</Text>
            ) : null}

            {!DataTopicsUser.loading ? (
              DataTopicsUser.length == 0 ? (
                <View style={styles.notHaveItems}>
                  <Text>You Don't Have Topic's!</Text>
                </View>
              ) : (
                <FlatList
                  style={styles.notificationList}
                  enableEmptySections={true}
                  data={DataTopicsUser}
                  renderItem={({ item }) => {
                    return (
                      <DataTable.Row
                        key={item._id}
                        style={styles.notificationBox}
                      >
                        <DataTable.Cell style={styles.tablePosition}>
                          <Text style={styles.tablePosition}>
                            {item.nameTopic}
                          </Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={styles.tablePosition}>
                          {item.DatePublished}
                        </DataTable.Cell>
                        <DataTable.Cell style={styles.tablePosition}>

                          {/* delete button */}
                          <ButtonDelete
                            data={item}
                            setModalVisible={setModalVisibleTopic}
                            type={"delete topic"}
                          />
                        </DataTable.Cell>
                      </DataTable.Row>
                    );
                  }}
                />
              )
            ) : null}
          </DataTable>
        </View>
      </View>
    </Modal>
  );
};


export default ListTopics;