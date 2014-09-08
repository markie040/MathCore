<?php

class APPLICATIONAPI_navigation extends APPLICATIONAPIBase {

	public function __construct () {
		parent::__construct();
		
	}
	
	public function getCompleteList()
	{
		
	}
	
	public function getHierarchy ()
	{
		$tree_root = $_REQUEST['supportLanguage'];
		$node_structure = $this->getHierarchyLevel($tree_root);
		
	}
	
	public function getHierarchyLevel($id)
	{
		
		$stmt = pdo_database::getHandle()->prepare($SQL);
		$stmt->execute(array($_REQUEST['supportLanguage'])); // pull the correct translations for titles 
		$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
		
		$nodes = array(); 
		
		foreach($rows as $row)
		{
			$topic[$row['uid']]['uid']     = $row['uid'];
			$topic[$row['uid']]['name']    = $row['translation'] == null ? $row['name'] : $row['translation']; // FYI this line makes the default text English! 
			$topic[$row['uid']]['nodes']   = $this->getHierarchyLevel($row['uid']); // recursive function 
		}
		
		return $nodes;
	}
	
}
    


?>